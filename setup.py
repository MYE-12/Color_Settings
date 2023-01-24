from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in color_settings/__init__.py
from color_settings import __version__ as version

setup(
	name="color_settings",
	version=version,
	description="Color ",
	author="Yousuf",
	author_email="mohamedyousufesi46@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
