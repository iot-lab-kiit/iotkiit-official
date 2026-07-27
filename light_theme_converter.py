import os
import re

replacements = [
    (re.compile(r'bg-\[\#030712\]'), 'bg-white'),
    (re.compile(r'bg-\[\#070F2B\]'), 'bg-slate-50'),
    (re.compile(r'\btext-white\b'), 'text-brand-navy'),
    (re.compile(r'\btext-gray-300\b'), 'text-gray-600'),
    (re.compile(r'\btext-gray-400\b'), 'text-gray-500'),
    (re.compile(r'border-white/1[05]'), 'border-black/5'),
    (re.compile(r'border-white/20'), 'border-black/10'),
    (re.compile(r'bg-white/10'), 'bg-black/5'),
    (re.compile(r'bg-white/\[0\.0[0-9]\]'), 'bg-black/5'),
    (re.compile(r'bg-black/50'), 'bg-gray-100'),
    (re.compile(r'\bshadow-glow-cyan\b'), 'shadow-glass-sm'),
    (re.compile(r'\bshadow-glow-blue\b'), 'shadow-glass'),
]

for root, _, files in os.walk('d:/prj/iotkiit-official'):
    if 'node_modules' in root or '.next' in root: continue
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            for pattern, repl in replacements:
                content = pattern.sub(repl, content)
            
            if content != original_content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f'Updated classes in {path}')
