import styled from 'styled-components';


export const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  background-color: white;
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`
export const Form = styled.form`
  display: flex;
  padding: 0px 12px;
  width: 100%;
`
export const NLink = styled.div`
  width: 100px;
  height: 38px;
  textDecoration: none;
`
export const Img = styled.img`
  margin: 0px;
  width: 100px;
  height : 38px;
`
export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin: 0% 1%;
  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 1px rgb(3, 158, 230);
  }
`
export const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
`

export const Svg = styled.svg`
  flex: none;
  transition: fill 0.25s;
  font-size: 25px;
  color: gray;
  ${Button}:hover & {
    fill: gold;
  }
`