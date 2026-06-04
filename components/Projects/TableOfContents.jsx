import React, { useState, useEffect } from 'react';

const TableOfContents = ({ sections = [], readmeHeadings = null, className = '' }) => {
  const [activeId, setActiveId] = useState(() => sections[0]?.id || null);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const allIds = [
      ...sections.map(s => s.id),
      ...(readmeHeadings || []).map(h => h.id),
    ];

    if (!allIds.length) return;

    const navbarH = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--navbar-height') || '80',
      10
    ) + 32;

    const getActiveId = () => {
      let currentId = allIds[0];
      for (const id of allIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= navbarH) {
          currentId = id;
        }
      }
      return currentId;
    };

    setActiveId(getActiveId());

    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setActiveId(getActiveId());
        raf = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [sections, readmeHeadings]);

  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const readmeIds = new Set((readmeHeadings || []).map(h => h.id));
  const isReadmeActive = activeId === 'project-readme' || readmeIds.has(activeId);
  const isReadmeExpanded = isReadmeActive || hoveredId === 'project-readme';

  const effectiveSubActiveId = readmeIds.has(activeId)
    ? activeId
    : (activeId === 'project-readme' && readmeHeadings?.length
        ? readmeHeadings[0].id
        : null);

  if (!sections.length) return null;

  return (
    <nav
      aria-label="Table of contents"
      className={`fixed z-40 w-48 max-h-[calc(100vh-220px)] overflow-y-auto ${className}`}
      style={{ top: 'calc(var(--navbar-height, 80px) + 80px)', left: '8px' }}
    >
      <ul className="space-y-0.5">
        {sections.map(({ id, label }) => {
          const isActive = activeId === id || (id === 'project-readme' && isReadmeActive);

          return (
            <li
              key={id}
              onMouseEnter={() => id === 'project-readme' && setHoveredId('project-readme')}
              onMouseLeave={() => setHoveredId(null)}
            >
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                aria-current={isActive ? 'true' : undefined}
                className={`block px-2 py-1.5 text-sm rounded-md transition-colors duration-150 normal-case
                  ${isActive
                    ? 'text-[#ff9f1c] font-medium'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                  }`}
              >
                {label}
              </a>

              {id === 'project-readme' && readmeHeadings && readmeHeadings.length > 0 && (
                <div className={`overflow-hidden transition-all duration-300 ease-in-out
                  ${isReadmeExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <ul className="mt-0.5 space-y-0.5 border-l-2 border-gray-200 dark:border-gray-700 ml-2 pl-3">
                    {readmeHeadings.map(({ id: hId, text }) => {
                      const isSubActive = effectiveSubActiveId === hId;
                      return (
                        <li key={hId}>
                          <a
                            href={`#${hId}`}
                            onClick={(e) => handleClick(e, hId)}
                            aria-current={isSubActive ? 'true' : undefined}
                            className={`block py-1 text-xs rounded transition-colors duration-150 normal-case
                              ${isSubActive
                                ? 'text-white font-medium'
                                : 'text-gray-400 dark:text-gray-500 hover:text-gray-200 dark:hover:text-gray-300'
                              }`}
                          >
                            {text}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TableOfContents;