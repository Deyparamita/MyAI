import multer from "multer";
import express from "express";

const storage = multer.diskStorage({});

export const upload = multer({ storage});