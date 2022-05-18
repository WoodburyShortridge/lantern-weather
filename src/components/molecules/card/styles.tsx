import styled from 'styled-components'

const Container = styled.article`
  border: 1px solid #000000;
  border-radius: 4px;
`

const Header = styled.div`
  height: 40px;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`

const Name = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: #FFFFFF;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const Body = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Icon = styled.img`
  width: 120px;
  height: 120px;
`

const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: #000000;
  margin: 0;
`

const ReportsScroll = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
`

const Reports = styled.div`
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
  }

  &&::-webkit-scrollbar-thumb {
    height: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
  }

  overflow-x: auto;
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  padding-bottom: 10px; // scroll bar
`

const Report = styled.div`
  p.value {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
    color: #000000;
    margin: 0 0 5px 0;
    white-space: nowrap;
  }

  p.metric {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    color: #000000;
    opacity: 0.5;
    margin: 0;
    white-space: nowrap;
  }
`

export {Container, Header, Name, Body, Icon, Description, ReportsScroll, Reports, Report}