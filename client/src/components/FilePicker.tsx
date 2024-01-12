import CustomButton from "./CustomButton";

interface FilePickerProps {
  file: File;
  setFile: React.Dispatch<React.SetStateAction<File>>;
  readFile: (type: string) => void;
}

const FilePicker = ({ file, setFile, readFile }: FilePickerProps) => {
  return (
    <div className="filepicker-container">
      <div className="flex flex-col flex-1">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        <p className="mt-2 text-xs text-gray-700 truncate">
          {!file ? "No file selected" : file.name}
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mt-4">
        <CustomButton
          type="outline"
          title="Logo"
          handleClick={() => readFile("logo")}
          customStyles="text-xs"
        />
        <CustomButton
          type="filled"
          title="Full"
          handleClick={() => readFile("full")}
          customStyles="text-xs"
        />
      </div>
    </div>
  );
};

export default FilePicker;
