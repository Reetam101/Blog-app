import multer from "multer"
import express from 'express'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads")
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.random(Math.random() * 1E9)\
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
  }
}
)
export const upload = multer({ storage })