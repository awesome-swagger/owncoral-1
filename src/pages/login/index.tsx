/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';
import { Mail, Lock, Eye, EyeOff } from 'react-feather';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import * as Styled from './style';
import { fetchWrap } from '../../Utils';
import { useHistory } from 'react-router';

import type { History } from 'history';
import type { User } from '../../SharedTypes';

type FormState = {
  email: string;
  password: string;
};

const onSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  formState: FormState,
  setUser: (up: User) => void,
  history: History,
) => {
  e.preventDefault();
  (async () => {
    const resp = await fetchWrap('/api/login', {
      method: 'POST',
      body: JSON.stringify(formState),
    });

    if (resp.ok) {
      setUser(await resp.json());
      history.push('/portfolio');
      return;
    }
    // TODO: add real UI
    alert('Login failed!');
  })();
};

const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  state: FormState,
  setState: (fs: FormState) => void,
) => {
  const { target } = e;
  const { name, value } = target;
  setState({ ...state, ...{ [name]: value } });
};

// Don't try to refactor Signup and Login into sharing too much code
// yet, signup will likely change and start diverging.
const Login = ({ setUser }: { setUser: (u: User) => void }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isDev = process.env.NODE_ENV === 'development';
  const [formState, setFormState] = useState({
    email: isDev ? 'a@b.com' : '',
    password: isDev ? 'asdf' : '',
  });
  const history = useHistory();

  return (
    <form onSubmit={(e) => onSubmit(e, formState, setUser, history)}>
      <Styled.Card>
        <Styled.CardTitle>
          <Logo
            css={css`
              height: 50px;
              margin: 10px;
              fill: var(--main-color);
            `}
          />
          <div>Log in to Franklin</div>
        </Styled.CardTitle>
        <Styled.InputLine>
          <Styled.Icon>
            <Mail size={20} stroke="gray" fill="none" />
          </Styled.Icon>
          <input
            placeholder="Email"
            name="email"
            required
            pattern="(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|&quot;(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*&quot;)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])" // editorconfig-checker-disable
            value={formState.email}
            onChange={(e) => handleInputChange(e, formState, setFormState)}
          />
        </Styled.InputLine>
        <Styled.InputLine>
          <Styled.Icon>
            <Lock size={20} stroke="gray" fill="none" />
          </Styled.Icon>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            required
            value={formState.password}
            onChange={(e) => handleInputChange(e, formState, setFormState)}
          />
          <div
            css={{ position: 'absolute', right: '20px', top: '14px' }}
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? (
              <Eye size={20} stroke="gray" fill="none" />
            ) : (
              <EyeOff size={20} stroke="gray" fill="none" />
            )}
          </div>
        </Styled.InputLine>
        <Styled.LoginBtn>
          <input type="submit" value="Log In" />
        </Styled.LoginBtn>
      </Styled.Card>
    </form>
  );
};

export default Login;
