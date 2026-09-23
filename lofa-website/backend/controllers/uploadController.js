// The actual upload (to Cloudinary) already happened via multer-storage-cloudinary
// middleware by the time this runs — req.file.path is the hosted image URL.
export async function uploadImage(req, res) {
  if (!req.file) return res.status(400).json({ message: "No image file received" });
  res.status(201).json({ url: req.file.path });
}
