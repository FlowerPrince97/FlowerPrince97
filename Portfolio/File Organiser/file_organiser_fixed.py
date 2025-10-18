import os
import shutil

EXTENSION_MAP = {
    "Images": [".jpg", ".jpeg", ".png", ".gif", ".bmp"],
    "Documents": [".pdf", ".docx", ".doc", ".txt", ".xlsx"],
    "Videos": [".mp4", ".avi", ".mov", ".mkv"],
    "Music": [".mp3", ".wav", ".aac"],
    "Archives": [".zip", ".rar", ".7z", ".tar"],
}

def get_target_folder():
    folder = input("Enter the path of the folder you want to organise: ").strip()
    if not os.path.exists(folder):
        print("That path doesn't exist. Please try again.")
        return None
    return folder

def organise_files(folder_path):
    for filename in os.listdir(folder_path):
        full_path = os.path.join(folder_path, filename)

        if os.path.isdir(full_path):
            continue  # Skip folders

        ext = os.path.splitext(filename)[1].lower()
        moved = False

        for category, extensions in EXTENSION_MAP.items():
            if ext in extensions:
                dest_folder = os.path.join(folder_path, category)
                os.makedirs(dest_folder, exist_ok=True)
                shutil.move(full_path, os.path.join(dest_folder, filename))
                print(f"Moved {filename} -> {category}/")
                moved = True
                break

        if not moved:
            other_folder = os.path.join(folder_path, "Others")
            os.makedirs(other_folder, exist_ok=True)
            shutil.move(full_path, os.path.join(other_folder, filename))
            print(f"Moved {filename} -> Others/")

def main():
    folder = get_target_folder()
    if folder:
        organise_files(folder)
        print("Organisation complete!")

if __name__ == "__main__":
    main()