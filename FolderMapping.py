import os

class FileTreeGenerator:
    EXCLUDED_PATHS = {
        'node_modules', '.next', '.git', '__pycache__',
        'public/core', 'public/ui',
        '.env', '.env.local', '.env.development', '.env.production',
        'config/secrets', 'security', 'credentials',
        '.DS_Store', 'thumbs.db'
    }

    SANITIZE_MAPPING = {
        '.env': '[environment-file]',
        'api-key': '[api-config]',
        'secret': '[secret-config]',
        'firebase-config': '[firebase-config]',
        'google-analytics': '[analytics-config]'
    }

    def __init__(self, root_name="portfolio-website"):
        self.root_name = root_name

    def sanitize_name(self, name):
        """Sanitize les noms de fichiers sensibles."""
        for sensitive, safe in self.SANITIZE_MAPPING.items():
            if sensitive in name.lower():
                return safe
        return name

    def write_tree(self, path, file, level=0, is_last=False):
        """Génère l'arbre des fichiers de manière récursive."""
        try:
            items = sorted([item for item in os.listdir(path)
                          if not any(excluded in os.path.join(path, item).replace('\\', '/') 
                                   for excluded in self.EXCLUDED_PATHS)])
        except:
            return

        for i, item in enumerate(items):
            is_last_item = (i == len(items) - 1)
            full_path = os.path.join(path, item).replace('\\', '/')
            
            prefix = "└── " if is_last_item else "├── "
            indent = "    " * (level - 1) + ("    " if level > 0 and is_last else "│   ") * (1 if level > 0 else 0)
            
            file.write(f"{indent}{prefix}{self.sanitize_name(item)}\n")
            
            if os.path.isdir(full_path):
                self.write_tree(full_path, file, level + 1, is_last_item)

    def generate(self, output_file='structure.txt'):
        """Génère l'arbre complet des fichiers."""
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(f"{self.root_name}\n")
            
            root_items = []
            for dir in ['components', 'context', 'lib', 'pages', 'public', 'styles']:
                if os.path.exists(dir):
                    root_items.append(dir)
            
            root_files = [f for f in os.listdir('.')
                         if os.path.isfile(f) and 
                         any(f.endswith(ext) for ext in ['.js', '.json', '.md', '.css', '.txt']) and
                         not any(excluded in f for excluded in self.EXCLUDED_PATHS)]
            root_items.extend(sorted(root_files))
            
            for i, item in enumerate(root_items):
                is_last = (i == len(root_items) - 1)
                prefix = "└── " if is_last else "├── "
                f.write(f"{prefix}{self.sanitize_name(item)}\n")
                
                if os.path.isdir(item):
                    self.write_tree(item, f, 1, is_last)

if __name__ == "__main__":
    generator = FileTreeGenerator()
    generator.generate()
    print("Structure de fichiers générée dans 'structure.txt'")