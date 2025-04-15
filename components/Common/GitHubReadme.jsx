import React, { useState, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import LoadingSkeleton from './LoadingSkeleton';
import Spinner from './Spinner';
import { useTheme } from 'next-themes';
import { FaGithub } from 'react-icons/fa';

const GitHubReadme = ({ username, repo, branch = 'main' }) => {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { theme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const isLocalStorageAvailable = useCallback(() => {
    try {
      const testKey = '__test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }, []);
  
  const getFromCache = useCallback((key) => {
    if (!isLocalStorageAvailable()) return null;
    
    try {
      const cachedData = localStorage.getItem(key);
      if (!cachedData) return null;
      
      const { content, timestamp } = JSON.parse(cachedData);
      if (Date.now() - timestamp < 86400000) {
        return content;
      }
      return null;
    } catch (e) {
      return null;
    }
  }, [isLocalStorageAvailable]);
  
  const saveToCache = useCallback((key, content) => {
    if (!isLocalStorageAvailable()) return;
    
    try {
      const data = {
        content,
        timestamp: Date.now()
      };
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {

    }
  }, [isLocalStorageAvailable]);

  const preprocessMarkdown = useCallback((markdown) => {
    let processed = markdown.replace(
      /!\[(.*?)\]\((?!http|https:\/\/)(.*?)\)/g,
      (match, alt, path) => {
        const cleanPath = path.replace(/^\.\//, '');
        return `![${alt}](https://raw.githubusercontent.com/${username}/${repo}/${branch}/${cleanPath})`;
      }
    );
  
    processed = processed.replace(
      /\[([^\]]+)\]\((?!http|https:\/\/|#)([^)]+)\)/g,
      (match, text, path) => {
        const cleanPath = path.replace(/^\.\//, '');
        return `[${text}](https://github.com/${username}/${repo}/blob/${branch}/${cleanPath})`;
      }
    );
  
    const codeBlocks = [];
    processed = processed.replace(/```[\s\S]*?```/g, (match) => {
      const placeholder = `__CODE_BLOCK_${codeBlocks.length}__`;
      codeBlocks.push(match);
      return placeholder;
    });
    
    processed = processed.replace(/`([^`]+)`/g, '<span class="github-inline-code">$1</span>');
    
    codeBlocks.forEach((block, i) => {
      processed = processed.replace(`__CODE_BLOCK_${i}__`, block);
    });
  
    return processed;
  }, [username, repo, branch]);

  useEffect(() => {
    const fetchReadme = async () => {
      if (!username || !repo) {
        setIsLoading(false);
        return;
      }
      
      const cacheKey = `github-readme-${username}-${repo}-${branch}`;
      const cachedContent = getFromCache(cacheKey);
      
      if (cachedContent) {
        setContent(cachedContent);
        setIsLoading(false);
        return;
      }
      
      try {
        let foundReadme = await tryFetchReadme(branch);
        
        if (!foundReadme && branch !== 'main') {
          foundReadme = await tryFetchReadme('main');
        }
        
        if (!foundReadme && branch !== 'master') {
          foundReadme = await tryFetchReadme('master');
        }
        
        if (!foundReadme) {
          setError('No README found');
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error loading README:', error);
        setError('Unable to load README');
        setIsLoading(false);
      }
    };
    
    const tryFetchReadme = async (currentBranch) => {
      try {
        const apiUrl = `https://api.github.com/repos/${username}/${repo}/contents?ref=${currentBranch}`;
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          return false;
        }
        
        const contents = await response.json();
        
        const readmeFile = contents.find(file => 
          /^readme(\.(md|markdown|txt))?$/i.test(file.name)
        );
        
        if (!readmeFile) {
          return false;
        }
        
        const readmeUrl = `https://raw.githubusercontent.com/${username}/${repo}/${currentBranch}/${readmeFile.name}`;
        const readmeResponse = await fetch(readmeUrl);
        
        if (!readmeResponse.ok) {
          return false;
        }
        
        const text = await readmeResponse.text();
        const processedContent = preprocessMarkdown(text);
        setContent(processedContent);
        
        const cacheKey = `github-readme-${username}-${repo}-${currentBranch}`;
        saveToCache(cacheKey, processedContent);
        
        setIsLoading(false);
        return true;
      } catch (error) {
        return false;
      }
    };

    setIsLoading(true);
    fetchReadme();
  }, [username, repo, branch, getFromCache, preprocessMarkdown, saveToCache]);

  if (isLoading) {
    return (
      <div className="relative min-h-[200px]">
        <LoadingSkeleton variant="rect" className="absolute inset-0 rounded-xl" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Spinner size="md" />
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center">
        <FaGithub className="mx-auto text-4xl mb-3 text-gray-500 dark:text-gray-400" />
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          {error === 'No README found' 
            ? "This project has no README file available" 
            : "Unable to load README."}
        </p>
        <a 
          href={`https://github.com/${username}/${repo}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 text-sm inline-flex items-center gap-1 hover:underline"
        >
          Visit the GitHub repository
        </a>
      </div>
    );
  }

  return (
    <article className="github-readme prose prose-gray dark:prose-invert max-w-none rounded-xl">
      <ReactMarkdown 
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        code({ node, inline, className, children, ...props }) {
          if (!inline) {
            const match = /language-(\w+)/.exec(className || '');
            const language = match && match[1] ? match[1] : '';

            const currentTheme = !isMounted ? 'dark' : (resolvedTheme || theme);
            
            return (
              <div className="code-block-container">
                {language && <div className="code-block-header">{language}</div>}
                <SyntaxHighlighter
                  style={currentTheme === 'dark' ? vscDarkPlus : vs}
                  language={language}
                  PreTag="div"
                  customStyle={{
                    margin: 0,
                    padding: '16px',
                    borderRadius: language ? '0 0 8px 8px' : '8px',
                    backgroundColor: currentTheme === 'dark' ? '#131212' : '#ffffff',
                  }}
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            );
          }
          return <code {...props}>{children}</code>;
        },
        
        a({ node, children, href, ...props }) {
          return (
            <a 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" 
              {...props}
            >
              {children}
            </a>
          );
        }
      }}
    >
      {content}
    </ReactMarkdown>
    </article>
  );
};

export default GitHubReadme;