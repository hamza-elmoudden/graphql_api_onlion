import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Producte } from './Schema/prodcut.schema';
import { Model } from 'mongoose';
import { GraphQLError } from 'graphql';
import { Firebaseimage } from './firebase.image';
import { PorductInput } from './Type/createprod.input';

@Injectable()
export class ProducteService {
    constructor(
        @InjectModel(Producte.name) private producteModel:Model<Producte>,
        private readonly firabe:Firebaseimage,
    ){}


    // async AddProducte(producte:PorductInput,image_one:any,image_two:any,image_three:any){
    //     try {
    //         const prod =  new this.producteModel({
    //             "title":producte.title,
    //             "descraption":producte.decription,
    //             "price":producte.price,
    //             "image_one":image_one,
    //             "image_tow":image_two,
    //             "image_three":image_three
    //         })
    //         await prod.save()

    //         return prod
    //     } catch (error) {
    //         throw new GraphQLError("Error in Servier")
    //     }
    // }


    async GetAllProducte(){
        try {

            const allprod = await this.producteModel.find()


            return allprod
            
        } catch (error) {
            throw new GraphQLError("Error in Servier")
        }
    }

    // async uplodeimage(file:any){
    //     try {
        
    //     const storage = this.firabe.getStoragInstance()
    //     const bucket =  storage.bucket("imagestore-8a10e.appspot.com")
    //     const filename = file.originalname ? `${Date.now()}_${file.originalname}`  : `${Date.now()}_${file.filename}`
    //     const fileupload =  bucket.file(filename)
    //     const { createReadStream } = file

    //     const chunks: Buffer[] = [];
    //     const streama = createReadStream();

    //     await new Promise<void>((resolve, reject) => {
    //             streama.on('data', chunk => chunks.push(chunk));
    //             streama.on('end', () => resolve());
    //             streama.on('error', reject);
    //           });
          
    //           // Combine all chunks into a single buffer
    //     const buffer = Buffer.concat(chunks)

    //     const stream =  fileupload.createWriteStream({
    //         metadata:{
    //             contentType:file.mimetype
    //         }
    //     })

    //     return new Promise((resolve,reject)=>{
    //         stream.on('error',(error)=>{
    //             reject(`Stream Error: ${error.message}`);
    //         })

    //         stream.on('finish' ,async ()=>{
    //             await fileupload.makePublic()
    //             const imageurl = `https://storage.googleapis.com/${bucket.name}/${filename}`
                
    //             resolve(imageurl)
    //         })

    //         stream.end(buffer)
            
    //     })
        
    //     } catch (error) {
    //         throw new Error(`Error in Servere: ${error}`)
    //     }

    // }


  

    // async deleteproducte(id:string){
    //     try {
    //         const prod = await this.producteModel.findOne({
    //             "_id":id
    //         })

    //         if(!prod){
    //             return false
    //         }

    //         await prod.deleteOne()
            
    //         return prod._id
    //     } catch (error) {
    //         throw new Error(`Error in Server ${error}`)
    //     }
    // }

    async FindProductebyid(id:string){
        try {
            // Get the producte

            const prod = await this.producteModel.findOne({
                "_id":id
            })
            
            // retrun producte
            return prod
        } catch (error) {
            // retrun Error
            throw new Error(`Error : ${error}`)
        }
    }
}
