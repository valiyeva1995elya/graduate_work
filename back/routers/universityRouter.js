const express = require("express");
const { UniversityModel } = require("../Models");
const router = express.Router();

router.get("/", (req, res) => {
    UniversityModel.find({}, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
});

// router.get("/:id", (req, res) => {
//     const id = req.params.id;
//     // const university = UniversityModel.find((u) => u._id === Number(id))
//     // if(university){
//     //     res.send(university);
//     // }else{
//     //     res.status(404).send("University not found")
//     // }
//     UniversityModel.find(id, (err, result) => {
//         if (err) {
//             res.status(500).send(err);
//         } else {
//             res.status(200).send(result);
//         }
//     });
// });
router.get("/:id", (req, res) => {
    const id = req.params.id;
    UniversityModel.findById(id, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(results);
        }
    });
});


router.post("/", (req, res) => {
    const { name, address, city, img, web_pages, email, description, public_private } = req.body;
    const newUniversity = new UniversityModel({ name, address, city, img, web_pages, email, description, public_private });
    newUniversity.save((err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send("Added new post");
        }
    });
});

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const { name, address, city, img, web_pages, email, description, public_private } = req.body;
    await UniversityModel.findByIdAndUpdate(id, { name, address, city, img, web_pages, email, description, public_private }
    );
    res.send("ok")
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    UniversityModel.findByIdAndDelete(id, (err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send("deleted");
        }
    });
});
// router.get("/like/:id", async (req, res) => {
//     const postId = req.params.id
//     const post = await UniversityModel.findById(postId);
//     await UniversityModel.findByIdAndUpdate(postId,{like: post.like +1 })
//     res.status(201).send("Ok");
// });

// router.get("/unlike/:id", async (req, res) => {
//     const postId = req.params.id
//     const post = await UniversityModel.findById(postId);
//     await UniversityModel.findByIdAndUpdate(postId,{like: post.like - 1})
//     res.status(201).send("Ok");
// });

module.exports = router