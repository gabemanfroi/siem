# Src

A pasta [src](src) é onde passamos a maior parte do tempo trabalhando, portanto familiariazar-se com sua estrutura
facilitará bastante sua vida :D

    src
        ├── modules # Contains all the application modules
        ├── pages # Contains all the application pages
        ├── sass # Contains application base styles
        ├── App.tsx # Application Root
        ├── index.tsx # Application entrypoint
        ├── README.md
        ├── setupTests.js

## [Modules](modules/README.md)

Nossa aplicação segue algumas das filosofias encontradas no [TAO of React](https://alexkondov.com/tao-of-react/), por
esse motivo segmentamos a aplicação em módulos, estes que por sua vez, geralmente estão ligados à alguma rota da
aplicação.

## [Pages](pages/README.md)

Nossas páginas se concentram nesta pasta, vale notar que apenas arquivos referentes às páginas se encontram aqui dentro,
enquanto que seus componentes estão dentro do módulo referente à página.

e.g.

    modules
        ├── Login
            ├── components
    pages
        ├── Login
            ├── index.tsx
            ├── Login.test.tsx
            ├── style.ts

## [Sass](scss/README.md)

Nosso projeto utiliza o [sass](https://sass-lang.com/) como pré-processador de arquivos de estilização. Dentro desta
pasta ficarão concentrados estilos mais abrangentes para aplicação, como é o caso dos estilos contidos
no [__normalize.scss](scss/core/__normalize.scss)  
