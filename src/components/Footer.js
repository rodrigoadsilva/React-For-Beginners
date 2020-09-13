import React from 'react'

const Rodape = props => {
    return (
        <footer className='container-fluid text-center'>
                <a href='#myPage' title='To Top'>
                    <span className='glyphicon glyphicon-chevron-up'></span>
                </a>
                <p>Site criado por <a href='https://github.com/rodrigoadsilva'>Rodrigo da Silva</a><br/>
                Utilizando React ministrado no curso de React para iniciantes da <a href='https://www.udemy.com/course/xumes-react-criando-site-para-empresa/' title='Curso Udemy de React'>Udemy</a></p>
        </footer>
    )
}

export default Rodape