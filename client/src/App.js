import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { FaSearch } from 'react-icons/fa'

const App = () => {
  const [inputText, setInputText] = useState('')
  const [apiData, setApiData] = useState([])

  const autoRef = useRef < HTMLUListElement > null

  const handleInputChange = event => {
    setInputText(event.target.value)
  }

  const getApi = async page => {
    return (
      inputText !== '' &&
      (await axios.get(`http://localhost:4000/sick?q=${inputText}`).then(res => {
        setApiData(res.data.filter(filterData => filterData.sickNm.includes(inputText)))
      }))
    )
  }

  useEffect(() => {
    getApi()

    if (inputText === '') {
      setApiData([])
    }
  }, [inputText])

  if (apiData.length >= 7) {
    apiData.length = 7
  }

  return (
    <AppWrapper>
      <h2>국내 모든 임상시험 검색</h2>
      <SearchWrapper>
        <SearchInput
          placeholder="질환명을 입력해 주세요."
          value={inputText}
          onChange={handleInputChange}
        />
        <InputSearchIconWrapper>
          <FaSearch />
        </InputSearchIconWrapper>
      </SearchWrapper>
      <SearchResultBoxWrapper>
        <SearchResultBox>
          {apiData.length !== 0 ? (
            apiData.map((data, idx) => (
              <li key={data.sickCd}>
                <a href="#">
                  <FaSearch className="searchIcon" />
                  {data.sickNm.split(inputText)[0]}
                  <TextBold>{inputText}</TextBold>
                  {data.sickNm.split(inputText)[1]}
                </a>
              </li>
            ))
          ) : (
            <NoResultText>검색어 없음</NoResultText>
          )}
        </SearchResultBox>
      </SearchResultBoxWrapper>
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;

  & h2 {
    text-align: center;
  }
`
const SearchWrapper = styled.div`
  margin: 0 auto;
  width: 60%;
  height: 70px;
  padding: 10px 10px 10px 20px;
  outline: 3px solid #ddd;
  border-radius: 35px;
  box-sizing: border-box;
`

const InputSearchIconWrapper = styled.button`
  width: 50px;
  height: 50px;
  line-height: 50px;
  background-color: #027be8;
  border-radius: 100%;
  color: white;
  font-size: 20px;
  border: none;
  cursor: pointer;
  padding: 0;
  vertical-align: middle;
`

const SearchInput = styled.input`
  width: calc(100% - 50px);
  font-size: 20px;
  outline: none;
  border: none;
  padding: 0;
  vertical-align: middle;

  &:focus {
    outline: none;
  }
`
const SearchResultBoxWrapper = styled.div`
  width: 60%;
  margin: 20px auto 0 auto;
`

const SearchResultBox = styled.ul`
  width: 100%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 0;

  & li {
    list-style-type: none;
  }

  & li a {
    color: black;
    text-decoration: none;
    padding: 10px 20px;
    display: block;
  }

  & li a:hover {
    background-color: #f5f5f5;
  }

  .searchIcon {
    color: #a6afb7;
    vertical-align: middle;
    margin-right: 10px;
  }
`
const NoResultText = styled.div`
  text-align: center;
  padding: 10px;
  color: #999;
`

const TextBold = styled.span`
  font-weight: bold;
`
