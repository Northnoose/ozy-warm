import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 64, height: 64 };
export const contentType = "image/jpeg";

export default async function Icon() {
  const logoData = await readFile(
    join(process.cwd(), "src/app/ozi_logo.jpg")
  );
  const logoBase64 = `data:image/jpeg;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "16px",
          overflow: "hidden",
          background: "#FAF7F2",
        }}>
        <img
          src={logoBase64}
          width={56}
          height={56}
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { ...size }
  );
}
