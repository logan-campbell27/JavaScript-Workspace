const { Album } = require('./lib/app/models/Album');
const { Track } = require('./lib/app/models/Track');
const { MusicDAO } = require('./lib/app/database/MusicDAO');
const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
app.use(bodyParser.json())

const dbHost = "localhost"
const dbPort = 3306;
const dbUsername = "root"
const dbPassword = "root"
app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))


app.get('/artists', function(req, res){
    console.log('In GET /artists route');
    let dao = new MusicDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.findArtists(function(artists){
        res.json(artists);
    });
});

app.get('/albums/:id', function(req, res){
    console.log('In GET /album/artistid route');
    let dao = new MusicDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.findAlbums(req.params.id,function(albums){
        console.log("dao created");
        res.json(albums);
    });
});
app.get('/allalbums', function(req,res){
    console.log('getting all albums');
    let dao = new MusicDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.findAllAlbums(function(allalbums){
        res.json(allalbums);
    });
});

app.get('/albumsid/:albumid', function(req, res){
    console.log('In get albums by albumid');
    let dao = new MusicDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.findAlbum(req.params.albumid, function(album){
        res.json(album);
    });
});

app.get('/albumsdesc/:albumdesc', function(req,res){
    console.log('getting album by description');
    let dao = new MusicDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.findAlbumsByDescription(req.params.albumdesc, function(desc){
        res.json(desc);
    });
})
app.post('/newalbum', function(req,res){
    console.log('creating new album');
    console.log(JSON.parse(req.body.id));
    console.log(req.body.title);
    console.log(req.body.description);
    console.log(req.body.year);
    console.log(req.body.tracks);
    var album = new Album(JSON.parse(req.body.id), req.body.title, req.body.description, req.body.year, req.body.tracks);
    console.log(album);
    let dao = new MusicDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.create(album, function(albumId){
        res.json(albumId);
        console.log('Album created');
    });
})
app.put('/editalbum/:albumId',function(req,res){
    console.log('updating album');
    var a = new Album(JSON.parse(req.body.id), req.body.title, req.body.description,req.body.year, null);
    console.log(a);
    let dao = new MusicDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.update(a, function(response){
        res.json(response);
        console.log('updated');
    });
})
app.delete('/deletealbum/:albumId',function(req,res){
    console.log('deleting album');
    let dao = new MusicDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.delete(req.params.albumId, function(rowsChanged){
        res.json(rowsChanged);
        console.log('deleted');
    })
})
