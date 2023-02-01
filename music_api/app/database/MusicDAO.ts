import { Album } from "../models/Album";
import { Artist } from "../models/Artist";
import { Track } from "../models/Track";

import * as mysql from "mysql";

import * as util from "util";
import SqlString from "mysql/lib/protocol/SqlString";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

export class MusicDAO{
    private host: string = "";
    private port: number = -1;
    private username: string = "";
    private password: string = "";
    private pool;
    constructor(host:string, port: number, username:string, password:string){
        this.host = host;
        this.port = port;
        this.username = username;
        this.password = password;

        this.pool = mysql.createPool({
            host: this.host,
            port: this.port,
            user: this.username,
            password: this.password,
            database: 'music_api_data'
        });
        module.exports = this.pool;

        /*this.connection = mysql.createConnection({
            host: this.host,
            user: this.username,
            password: this.password,
            port: this.port,
            database: "music_api_data"
        });*/

    }

    public findArtists(callback: any){

         let artists:Artist[] = [];

         
            this.pool.getConnection(function(err: any, connection: any){
            if (err) throw err
            
            connection.query('SELECT * FROM ARTIST', function(err:any, rows:any, fields:any){
                connection.release();

                if(err) throw err
                for(let x=0; x<rows.length; ++x){
                    artists.push(new Artist(x, rows[x].name, rows[x].albums));
                }

                callback(artists);
            });
         });

    }
    public findAlbums(artistid:number, callback: any){

        let albums:Album[] = [];
        this.pool.getConnection(async function(err: any, connection: any){
            connection.release();
            if(err) throw err
            connection.query = util.promisify(connection.query);
            let result = await connection.query('SELECT * FROM ALBUM WHERE ARTIST_ID=?', [artistid]);
            for(let x=0; x<result.length; ++x){
                let albumId = result[x].id;
                let tracks: Track[] = [];
                let result1 = await connection.query('SELECT *  FROM TRACK WHERE ALBUM_ID=?',[albumId]);
                for(let y=0; y<result1.length;++y){
                    tracks.push(new Track(result1[y].id, result1[y].track_name, result1[y].track_number, result1[y].track_lyrics))
                }
                albums.push(new Album(result[x].id, result[x].album_name, result[x].album_description, result[x].album_year, tracks))
            }
            callback(albums);
        });


    }
    public findAllAlbums(callback: any){

        let albums:Album[] = [];

        this.pool.getConnection(function(err: any, connection: any){
            if(err) throw err
            connection.query('SELECT * FROM ALBUM', function(err:any, rows:any, fields:any){
                for(let x=0; x<rows.length;++x){
                    let tracks: Track[] = [];
                    connection.query('SELECT * FROM TRACK',function(err:any, rows:any, fields:any){
                        for(let y=0; y<rows.length;++y){
                            tracks.push(new Track(rows[y].id, rows[y].track_name, rows[y].track_number, rows[y].track_lyrics))
                        }
                    });
                    
                    albums.push(new Album(x, rows[x].album_name, rows[x].album_description, rows[x].album_year, tracks));     
                    }
                callback(albums);
            });
            
        });


    }
    public findAlbum(albumId: number, callback:any){


        let albums:Album[] = [];
        this.pool.getConnection(async function(err: any, connection: any){
            connection.release();
            if(err) throw err
            connection.query = util.promisify(connection.query);
            let result = await connection.query('SELECT * FROM ALBUM WHERE ID=?', [albumId]);
            for(let x=0; x<result.length; ++x){
                let tracks: Track[] = [];
                let result1 = await connection.query('SELECT *  FROM TRACK WHERE ALBUM_ID=?',[albumId]);
                for(let y=0; y<result1.length;++y){
                    tracks.push(new Track(result1[y].id, result1[y].track_name, result1[y].track_number, result1[y].track_lyrics))
                }
                albums.push(new Album(result[x].id, result[x].album_name, result[x].album_description, result[x].album_year, tracks))
                callback(albums);
            }
            
        });

    }
   
    public findAlbumsByDescription(search:string, callback: any){


        let albums:Album[] = [];
        this.pool.getConnection(async function(err: any, connection: any){
            connection.release();
            if(err) throw err
            connection.query = util.promisify(connection.query);
            let result = await connection.query('SELECT * FROM ALBUM WHERE ALBUM_DESCRIPTION LIKE \'%?%\' ', [search]);
            for(let x=0; x<result.length; ++x){
                let albumId = result[x].id;
                let tracks: Track[] = [];
                let result1 = await connection.query('SELECT *  FROM TRACK WHERE ALBUM_ID=?',[albumId]);
                for(let y=0; y<result1.length;++y){
                    tracks.push(new Track(result1[y].id, result1[y].track_name, result1[y].track_number, result1[y].track_lyrics))
                }
                albums.push(new Album(result[x].id, result[x].album_name, result[x].album_description, result[x].album_year, tracks))
                callback(albums);
            }
            
        });
            
    }
    public create(album:Album, callback: any){

        this.pool.getConnection(async function(err: any, connection: any){
                 connection.release();
                 if(err) throw err
                 connection.query = util.promisify(connection.query);
                 let a = new Album(album.Id,album.Title,album.Description,album.Year,album.Tracks);
                 let result = await connection.query('INSERT INTO `Album` (`id`, `album_name`, `album_year`, `album_description`, `Artist_id`) VALUES (?,?,?,?,?)',[a.Id],[a.Title],[a.Year],[a.Description],[1]);
                 if(result.affectedRows != 1){
                    callback(-1)
                 }

                 callback(result);
                });

    }
    public update(album:Album, callback: any){

        this.pool.getConnection(async function(err: any, connection: any){
            connection.release();
            if(err) throw err
            connection.query = util.promisify(connection.query);
            let result = await connection.query('UPDATE ALBUM SET album_name=?, album_year=?, album_description=? WHERE ID=?',[album.Title],[album.Year],[album.Description],[album.Id]);
            callback(result);

        });
    }
    public delete(albumId:number, callback: any){
        this.pool.getConnection(async function(err: any, connection: any){
            connection.release();
            if(err) throw err
            connection.query = util.promisify(connection.query);
            let result = await connection.query('DELETE FROM ALBUM WHERE ID=?',[albumId]);
            callback(result);
        });
    }
}

