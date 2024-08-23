"use client";
import React, { useState } from "react";

import { Upload, X, Check, AlertCircle } from "lucide-react";
import { UseFormSetValue } from "react-hook-form";
import { Button } from "./ui/button";

interface FileUploaderProps {
  inputId: string;
  isMultiple?: boolean;
  onChange?: (files: HTMLInputElement["files"]) => void;
  setValue: UseFormSetValue<any>;
  fieldName?: string;
}
export default function FileUploader({
  inputId,
  isMultiple = false,
  fieldName = inputId,
  onChange,
  setValue,
}: FileUploaderProps) {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [isError, setIsError] = useState(false);
  // const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let files = null;
    if (event.target.files)
      if (event.target.files[0] != null) {
        files = event?.target?.files;
        setIsError(true);
      }
    if (files) {
      if (isMultiple) {
        Array.from(files).map((file) => {
          setUploadedFiles((prevUploadedFiles) => [
            ...prevUploadedFiles,
            file.name,
          ]);
        });
      } else {
        // if (files && files[0] && files[0].name)
        setUploadedFiles([files[0].name]);
      }
      setIsError(false);
    }

    onChange?.(files);
  };
  const handleFileRemove = (fileName: string) => {
    setUploadedFiles((prevUploadedFiles) =>
      prevUploadedFiles.filter((file) => file !== fileName)
    );
    if (uploadedFiles.length === 1) {
      setUploadedFiles([]);
    }
    setValue(fieldName, undefined);
  };

  return (
    <div className="flex w-full justify-center space-y-4 rounded border-2 border-dashed px-5 py-3">
      <input
        multiple={isMultiple}
        type="file"
        name={inputId}
        id={inputId}
        className="hidden"
        onChange={(e) => {
          handleFileChange(e);
        }}
      />
      {uploadedFiles.length != 0 ? (
        <label
          htmlFor={inputId}
          className="mt-0 flex w-full cursor-pointer items-center  justify-center gap-1.5
         text-gray-700 decoration-2 hover:underline dark:text-primary"
        >
          <span className="rounded bg-gray-200 p-2 text-blue-500">رفع ملف</span>
          <Upload size={24} />
          اسحب الملف للرفع
        </label>
      ) : (
        <label
          htmlFor={inputId}
          className="flex max-w-xl cursor-pointer items-center justify-center gap-1.5
         text-gray-700 decoration-2 hover:underline dark:text-white"
        >
          <Upload size={24} />
          <span className="text-blue-500 underline decoration-2 hover:text-blue-600">
            اختر الملف
          </span>{" "}
          أو اسحب الملف للرفع
        </label>
      )}
      {uploadedFiles && (
        <div>
          {uploadedFiles.map((file, i) => {
            return (
              <div
                key={i}
                className="flex max-w-xl items-center justify-between rounded border-b px-5 py-3 text-sm text-gray-700"
              >
                <div className="flex items-center gap-2">
                  {isError ? (
                    <AlertCircle className="text-red-500" size={20} />
                  ) : (
                    <Check className="text-blue-500" size={20} />
                  )}
                  <span className="font-medium">{file}</span>
                </div>

                <Button
                  size={"icon"}
                  variant={"ghost"}
                  onClick={() => handleFileRemove(file)}
                >
                  <X size={20} className="text-gray-500 hover:text-gray-700" />
                </Button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
