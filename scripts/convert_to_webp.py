#!/usr/bin/env python3
"""批量将产品图片转换为WebP格式并压缩"""

from PIL import Image
import os
from pathlib import Path

# 图片目录
img_dir = Path(r"C:\Users\chemac\zw-site\images")

# 原始图片列表
originals = [
    ("prod-industrial.jpg", 4.9),
    ("prod-hydrogenation.jpg", 1.2),
    ("prod-lab.jpg", 3.8),
    ("prod-pilot.png", 0.16),
    ("prod-nonferrous.jpg", 1.5),
    ("prod-system.jpg", 5.3),
    ("prod-heatex.jpg", 0.17),
    ("prod-liftflip.jpg", 0.15),
    ("prod-tank.jpg", 0.12),
]

print("=" * 60)
print("开始转换产品图片为 WebP 格式")
print("=" * 60)
print()

total_original = 0
total_webp = 0
results = []

for filename, approx_mb in originals:
    src = img_dir / filename
    if not src.exists():
        print(f"跳过 (不存在): {filename}")
        continue
    
    # 获取原始大小
    original_size = src.stat().st_size
    total_original += original_size
    
    # 转换为WebP
    webp_filename = filename.rsplit('.', 1)[0] + ".webp"
    dst = img_dir / webp_filename
    
    try:
        with Image.open(src) as img:
            # 转换为RGB (WebP不支持RGBA的透明通道质量压缩)
            if img.mode in ('RGBA', 'P', 'LA'):
                # 创建白色背景
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                img = background
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            # 压缩为WebP，质量85%
            img.save(dst, 'WEBP', quality=85, optimize=True)
            
            webp_size = dst.stat().st_size
            total_webp += webp_size
            reduction = (1 - webp_size / original_size) * 100
            
            results.append({
                'original': filename,
                'webp': webp_filename,
                'original_mb': original_size / 1024 / 1024,
                'webp_mb': webp_size / 1024 / 1024,
                'reduction': reduction
            })
            
            print(f"✓ {filename:<25} → {webp_filename:<25} ({reduction:.0f}% 减小)")
    
    except Exception as e:
        print(f"✗ {filename}: {e}")

print()
print("=" * 60)
print("转换完成!")
print("=" * 60)
print(f"原始图片总大小: {total_original / 1024 / 1024:.1f} MB")
print(f"WebP总大小: {total_webp / 1024 / 1024:.1f} MB")
print(f"总共节省: {(1 - total_webp / total_original) * 100:.0f}%")
print()

# 更新HTML文件中的图片引用
print("更新HTML文件...")
html_dir = img_dir.parent

for html_file in html_dir.glob("products/*.html"):
    content = html_file.read_text(encoding='utf-8')
    modified = False
    
    for result in results:
        old_src = f"images/{result['original']}"
        new_src = f"images/{result['webp']}"
        
        if old_src in content and old_src != new_src:
            # 检查是否已经是webp
            if result['webp'] not in content:
                content = content.replace(old_src, new_src)
                modified = True
                print(f"  ✓ 更新 {html_file.name}: {result['original']} → {result['webp']}")
    
    if modified:
        html_file.write_text(content, encoding='utf-8')

print()
print("所有任务完成!")
