import React from 'react'

export default function BookAdd() {
    return (
        <section className="manage-books">
            <form autocomplete="off" id="addEditForm">
                <div>
                    <label for="title">Title: </label>
                    <input type="text" id="title" />
                </div>
                <div>
                    <label for="author">Author: </label>
                    <input type="text" id="author" />
                </div>
                <div>
                    <label for="alreadyRead">Já Lido: </label>
                    <input type="checkbox" id="alreadyRead" />
                </div>
                <div>
                    <label for="imgUrl">Imagem pequena: </label>
                    <input type="text" id="imageUrl" />
                </div>
                <div>
                    <label for="imgUrlGr">Imagem Grande: </label>
                    <input type="text" id="imageUrlGr" />
                </div>
                <div class="btns">
                    <button class="btn addBtn" id="submitBtn">Acrescentar Livro</button>
                    <button class="btn updateBtn hide" id="updateBtn">Atualizar Livro</button>
                </div>
            </form>
        </section>
    )
}