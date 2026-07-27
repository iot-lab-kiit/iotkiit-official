import os
import re

# Match a div or span that has "inline-flex" and "rounded-full" and "border", containing an icon (any capitalized tag) and some text
pattern = re.compile(r'\s*<(?:div|span) className="inline-flex items-center gap-2 rounded-full border border-[^"]+"[^>]*>\s*<[A-Z][a-zA-Z0-9]+[^>]*/>\s*<span[^>]*>[^<]*</span>\s*</(?:div|span)>', re.DOTALL)

for root, _, files in os.walk('d:/prj/iotkiit-official'):
    if 'node_modules' in root or '.next' in root: continue
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            if pattern.search(content):
                new_content = pattern.sub('', content)
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f'Removed badge in {path}')
