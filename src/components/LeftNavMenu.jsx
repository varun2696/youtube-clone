import React, { Fragment, useContext } from 'react'
import { categories } from '../utils/constants'
import LeftNavMenuItem from './LeftNavMenuItem'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const LeftNavMenu = () => {
  const { selectCategory, setSelectCategory, mobileMenu } = useContext(AppContext)
  const navigate = useNavigate();

  const handleClick = (name, type) => {
    switch (type) {
      case "category":
        return setSelectCategory(name)
      case "home":
        return setSelectCategory(name)
      case "menu":
        return false;
      default:
        break;
    }
  }

  return (
    <div className='md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240] md:translate-x-0 transition-all'
    >
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return <Fragment>
            <LeftNavMenuItem
              icon={item.icon}
              text={item.type == "home" ? "Home" : item.name}
              onClick={() => {
                handleClick(item.name, item.type);
                navigate("/");
              }}
              currentItem={`${selectCategory == item.name ? "bg-white/[0.20]" : ""}`}
            />
            {item.divider && <hr className='my-5 border-white/[0.30]' />}
          </Fragment>
        })}

        <hr className='my-5 border-white/[0.30]' />

        <div className="text-white/[0.5] text-sm">
          Clone By VARUN
        </div>

      </div>
    </div>
  )
}

export default LeftNavMenu