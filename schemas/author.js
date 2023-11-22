import mongoose, { Schema } from "mongoose";

const AuthorSchema = new Schema({

    nome: {
        type: String,
        required: true
    },
    cognome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    data_di_nascita: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    }
})

export const User = mongoose.model("authors", AuthorSchema); 