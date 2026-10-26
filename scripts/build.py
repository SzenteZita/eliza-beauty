from pathlib import Path
import shutil
root=Path(__file__).resolve().parent.parent
out=root/'dist'
out.mkdir(exist_ok=True)
shutil.copytree(root/'site',out,dirs_exist_ok=True)
print(f'Elkészült: {out}')
