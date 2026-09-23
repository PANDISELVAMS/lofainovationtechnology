import cloudinary from "../utils/cloudinary.js";

export async function testCloudinaryUpload(req, res) {
  try {
    console.log("========== CLOUDINARY TEST ==========");

    console.log("Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);
    console.log(
      "API Key:",
      process.env.CLOUDINARY_API_KEY ? "SET" : "MISSING"
    );
    console.log(
      "API Secret:",
      process.env.CLOUDINARY_API_SECRET ? "SET" : "MISSING"
    );

    // Test image from a public URL
    const result = await cloudinary.uploader.upload(
      "https://res.cloudinary.com/demo/image/upload/sample.jpg",
      {
        folder: "lofa-test",
      }
    );

    console.log("UPLOAD SUCCESS ✅");
    console.log("Public ID:", result.public_id);
    console.log("Image URL:", result.secure_url);

    res.json({
      success: true,
      message: "Cloudinary upload working!",
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error) {
    console.error("========== CLOUDINARY TEST FAILED ==========");
    console.error("Message:", error.message);
    console.error("HTTP Code:", error.http_code);
    console.error("Full Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
      http_code: error.http_code || null,
      error: error.error || null,
    });
  }
}