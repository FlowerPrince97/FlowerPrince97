### importing python modules that provide tools for interacting the operating system files, and handling file paths ###

import os # operating system interface - lets python interact with the operating sysytem #
    # check if a folder exists - os.path.exists() #
    # loop through folder contents - os.listdir() #
    # build file paths - os.path.join() #
    # example: os.listdir("Downloads") - returns a files list of Downloads folder #

import shutil # shell utilities - assists in moving and copying folders or files (Python equivalent of drag'n'drop) #
    # move files from folder to folder - shutil.move() #
    # example: shutil.move("photo.jpg", "Images/photos.jpg") - moves the file #

from pathlib import Path # modern path handling - provides an object oriented interface instead of only using strings #
    # Path is the main class being used here from pathlib #
    # Path automatically handles Windows \ vs. Unix / #
    # allows for things like- #
        # path = Path("Documents") #
        # if path.exists(): #
            # print("It exists!")
# in this script Path is used to make folder handling cleaner if needed, #
# os is used the most, but Path will be more helpful in future improvements #

def get_target_folder():
    folder = input("Enter the path of the folder you want to organise:").strip()
    if not os.path.exists(folder):
        print("That path doesn't exist. Please try again.")
        return None
    return folder

# shutil and Path not working because they have not been called on yet #

def organise_files(folder_path):
    for filename in os.listdir(folder_path):
        full_path = os.path.join(folder_path, filename)
        if os.path.isdir(full_path):
            continue
ext = os.path.splitext(filename)[1].loewr()
moved = False
for category, extensions in EXTENSION_MAP.items():
    if ext in extensions:
        dest_folder = os.path.join(foler_path, category)
        os.makdirs(dest_folder, exist_ok=True)
        shutil.move(full_path, os.path.join(dest_folder, filename))
        print(f"Moved {filename} -> {category}/")
        moved = True
        break
if not moved:
    other_folder = os.path.join(folder_path, "Others")
    os.makedirs(other_folder, exists_ok=True)
    shutil.move(full_path, os.path.join(other_folder, filename))
    print(f"Moved {filename} -> Others/")

    def main():
        folder = get_target_folder()
        if folder:
            organise_files(folder)
            print("Organisation complete!")
    if __name__ == "__main__":
        main()