const express = require("express");
const router = express.Router();
const fs = require("fs")

var multer = require('multer');

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads')
	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '-' + Date.now())
	}
});

var upload = multer({ storage: storage });



router.post('/upload', upload.single('file'), (req, res, next) => {
	let type = req.file.mimetype.split("/")[0];
	if(type != "image" && type != "video" && type != "audio") type = "file"
	res.send({
		"file": req.file.filename,
		"type": type
	})
});

router.get('/file/:name', (req, res)=>{
	fs.createReadStream(global.__dirname+"/uploads/"+req.params.name).pipe(res);
})

module.exports=router;