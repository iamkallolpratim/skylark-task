import styled from 'styled-components'

const AppHolder = styled.div`
  .trigger {
    font-size: 18px
    line-height: 64px
    padding: 0 24px
    transition: color .3s
    color: #000
    cursor: pointer

  }

  .trigger:hover {
    color: #bdbdbd
  }

  .content{
    max-width:100%
    overflow:hidden
  }

  .sidebar{
    z-index: 1000
    background: #2d3446
  }
  .ant-menu-item-selected {
    background-color: rgba(0,0,0,0.4) !important;
  }

  .sidebar-menu{
    padding-top: 20px
    padding-bottom: 35px
    background: transparent
  }

  .logo{
    height: 70px
    background: rgba(0,0,0,0.3);
    margin: 0
    padding: 0 10px
    text-align: center
    overflow: hidden
    border-radius: 0
    h3{
        font-size: 21px
        font-weight: 300
        line-height: 70px
        letter-spacing: 3px
        color: #F9F9F9
        display: block
        text-decoration:none
    }
  }

`

export { AppHolder }
