import os
import re

replacements = [
    # Colors
    (re.compile(r'\bbrand-navy\b'), 'brand-blue'),
    (re.compile(r'\bbg-(slate|gray|blue)-50\b'), 'bg-white'),
    (re.compile(r'\btext-gray-[4567]00\b'), 'text-brand-blue/80'),
    (re.compile(r'\btext-cyan-[2345]00\b'), 'text-brand-blue'),
    (re.compile(r'\btext-blue-[67]00\b'), 'text-brand-blue'),
    (re.compile(r'\bbg-cyan-[456]00(/[0-9]+)?\b'), 'bg-brand-blue/10'),
    (re.compile(r'\bbg-blue-[456]00(/[0-9]+)?\b'), 'bg-brand-blue/10'),
    
    # Borders
    (re.compile(r'\bborder-(black|white|cyan|blue|slate|gray)(/[0-9]+)?\b'), 'border-brand-blue'),
    (re.compile(r'\bborder-cyan-[0-9]+(/[0-9]+)?\b'), 'border-brand-blue'),
    (re.compile(r'\bborder-blue-[0-9]+(/[0-9]+)?\b'), 'border-brand-blue'),
    
    # Shadows
    (re.compile(r'\bshadow-(xl|2xl|glass|glass-sm|glow-blue|glow-cyan|lg|md|sm)\b'), 'shadow-brutal'),
    
    # Remove Blurs
    (re.compile(r'\bbackdrop-blur(-[a-z]+)?\b'), ''),
    
    # Remove Rounded
    (re.compile(r'\brounded(-[a-z0-9]+)?\b'), ''),
    
    # Convert arbitrary opacity backgrounds to solid or transparent
    (re.compile(r'\bbg-white/9[05]\b'), 'bg-white'),
    (re.compile(r'\bbg-black/[0-9]+\b'), 'bg-brand-blue/10'),
    
    # Clean up double spaces
    (re.compile(r'  +'), ' ')
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
