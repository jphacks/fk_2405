"use client";

import { useState } from "react";

import { Modal } from "./modal";

export const ScanNfc = () => {
  const [status, setStatus] = useState("");
  const [scannedContent, setScannedContent] = useState("");

  const readNFC = async () => {
    try {
      if ("NDEFReader" in window) {
        const ndef = new NDEFReader();
        await ndef.scan();
        setStatus("スキャンを開始しました！");

        ndef.onreading = (event) => {
          const decoder = new TextDecoder();
          const { records } = event.message;
          const content = records
            .map((record) => decoder.decode(record.data))
            .join("\n");
          setScannedContent(content);
          setStatus("NFCタグの読み取りに成功しました！");
        };

        ndef.onreadingerror = () => {
          setStatus("NFCタグの読み取りに失敗しました。");
        };
      } else {
        setStatus("このブラウザはWeb NFCをサポートしていません。");
      }
    } catch (error) {
      console.error("NFC読み取りエラー:", error);
      setStatus(`読み取りエラー: ${error.message}`);
    }
  };

  return (
    <div>
      {scannedContent && status == "NFCタグの読み取りに成功しました！" && (
        <Modal
          userName={scannedContent}
          setScannedContent={setScannedContent}
        />
      )}
      <div
        className="w-[90vw] h-[52px] mt-5 mb-8 mx-[5vw] bg-custom_blue rounded-xl flex justify-center items-center font-bold text-white flex-col shadow-lg"
        onClick={readNFC}
        role="button"
        aria-label="カードを読み込む"
      >
        {status !== "スキャンを開始しました！" ? (
          <h1>カードを読み込む</h1>
        ) : (
          <h1>読み込み中…</h1>
        )}
      </div>
    </div>
  );
};
