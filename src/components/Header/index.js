import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import * as S from './styled';

export default function Header() {
    const location = useLocation();
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        setClicked(false);
    }, [location]);

    const handleLogin = () => {
        window.location.href =
            'https://github.com/login/oauth/authorize?client_id=5023286bf1948ac05f6b';
    };

    return (
        <S.Header>
            <S.Title>
                <S.StyledLink to="/" exact>
                    Dev<span>Challenge</span>
                </S.StyledLink>
            </S.Title>

            <S.MenuMobile onClick={() => setClicked(!clicked)}>
                {!clicked ? (
                    <FontAwesomeIcon icon={faBars} />
                ) : (
                    <FontAwesomeIcon icon={faTimes} />
                )}
            </S.MenuMobile>

            <S.Menu open={!clicked}>
                <ul>
                    <li>
                        <S.StyledLink activeClassName="is-active" to="/" exact>
                            Início
                        </S.StyledLink>
                    </li>
                    <li>
                        <S.StyledLink
                            activeClassName="is-active"
                            to="/challenges"
                        >
                            Desafios
                        </S.StyledLink>
                    </li>
                    <li>
                        <S.StyledLink activeClassName="is-active" to="/devs">
                            Comunidade
                        </S.StyledLink>
                    </li>
                    <li>
                        <a activeClassName="is-active" onClick={handleLogin}>
                            Entrar
                            <FontAwesomeIcon
                                icon={faGithub}
                                style={{ marginLeft: '10px' }}
                            />
                        </a>
                    </li>
                </ul>
            </S.Menu>
        </S.Header>
    );
}
