import menu from '../../src/assets/images/icon-menu.svg';
import toDoImage from '../../src/assets/images/icon-todo.svg';
import calendarImage from '../../src/assets/images/icon-calendar.svg';
import reminderImage from '../../src/assets/images/icon-reminders.svg';
import planningImage from '../../src/assets/images/icon-planning.svg';
import arrowDownImage from '../../src/assets/images/icon-arrow-down.svg';
import arrowUpImage from '../../src/assets/images/icon-arrow-up.svg';
import close from '../../src/assets/images/icon-close-menu.svg';
import { useState } from 'react';

const FETURES_ITEM = [
  { image: toDoImage, title: 'Todo List' },
  { image: calendarImage, title: 'Calendar' },
  { image: reminderImage, title: 'Reminders' },
  { image: planningImage, title: 'Planning' },
];

const COMPANY_ITEMS = ['History', 'Our Team', 'Blog'];

const NavBar = () => {
  const [isMouseOverFeatureMenu, setIsMouseOverFeatureMenu] = useState<boolean>(false);
  const [isMouseOverCompanyMenu, setIsMouseOverCompanyMenu] = useState<boolean>(false);
  const [showDrawer, setShowDrawer] = useState<boolean>(true);

  return (
    <>
      <div className='flex flex-row items-center justify-between px-4 mt-4 '>
        <div className='flex flex-row items-baseline '>
          <p className='mr-12 text-4xl font-bold text-my_paragraph'>snap</p>
          <ul className='items-center hidden space-x-6 text-md text-my_gray md:flex'>
            {/**************** Fautures Menu Item ****************/}
            <li
              onMouseOver={() => setIsMouseOverFeatureMenu(true)}
              onMouseLeave={() => setIsMouseOverFeatureMenu(false)}
              className='relative group'>
              <div>
                <div className='flex flex-row items-center space-x-2'>
                  <a href='#/' className='group-hover:text-my_black'>
                    Features
                  </a>
                  <img
                    src={isMouseOverFeatureMenu ? arrowUpImage : arrowDownImage}
                    className='w-2 h-2'
                    alt=''
                  />
                </div>

                <div className='absolute hidden pt-4 group-hover:block hover:block'>
                  <div className='p-5 space-y-4 rounded-lg shadow-md '>
                    {FETURES_ITEM.map((item) => (
                      <div className='flex flex-row  min-w-[100px]'>
                        <img src={item.image} className='w-4 h-4' alt='' />
                        <p className='pl-2 capitalize text-my_gray '>{item.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            {/**************** Company Menu Item ****************/}
            <li
              onMouseOver={() => setIsMouseOverCompanyMenu(true)}
              onMouseLeave={() => setIsMouseOverCompanyMenu(false)}
              className='relative group'>
              <div>
                <div className='flex flex-row items-center space-x-2r '>
                  <a href='#/' className='group-hover:text-my_black'>
                    Company
                  </a>
                  <img
                    src={isMouseOverCompanyMenu ? arrowUpImage : arrowDownImage}
                    className='w-2 h-2 ml-2'
                    alt=''
                  />
                </div>

                <div className='absolute hidden pt-4 group-hover:block hover:block'>
                  <div className='p-5 space-y-4 rounded-lg shadow-md '>
                    {COMPANY_ITEMS.map((item) => (
                      <div className='flex flex-row  min-w-[100px]'>
                        <p className='pl-2 capitalize text-my_gray '>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href='#/' className='hover:text-my_black'>
                Careers
              </a>
            </li>
            <li>
              <a href='#/' className='hover:text-my_black'>
                About
              </a>
            </li>
          </ul>
        </div>

        <div className='items-center hidden space-x-4 md:flex '>
          <a href='#/' className='text-my_gray hover:text-my_black'>
            Login
          </a>
          <a
            href='#/'
            className='px-6 py-2 border-2 rounded-xl border-my_gray hover:border-my_black text-my_gray hover:text-my_black'>
            Register
          </a>
        </div>

        <img
          src={menu}
          className='w-6 h-4 md:hidden'
          alt='closeIcon'
          onClick={() => setShowDrawer((prevState) => !prevState)}
        />
      </div>

      {/******************  Drawer  ******************/}
      {showDrawer ? (
        <div className='absolute top-0 left-0 right-0 z-10 h-screen bg-black/70 md:hidden'>
          <div className='relative'>
            <div className='absolute top-0 right-0 h-screen p-5 bg-white '>
              <img
                src={close}
                className='w-6 h-6 mb-10 ml-auto '
                alt='databizImage'
                onClick={() => setShowDrawer((prevState) => !prevState)}
              />

              <div className='pr-16 space-y-6 '>
                <div className='flex flex-row items-center'>
                  <p>Features</p>
                  <img
                    src={arrowDownImage}
                    className='w-3 h-2 ml-2 '
                    alt='databizImage'
                  />
                </div>

                <div className='flex flex-row items-center'>
                  <p>Company</p>
                  <img
                    src={arrowDownImage}
                    className='w-3 h-2 ml-2 '
                    alt='databizImage'
                  />
                </div>
                <p>Careers</p>
                <p>About</p>
              </div>

              <div className='flex flex-col items-center mt-8 space-y-5 '>
                <a className='block' href='#/'>
                  Login
                </a>
                <a
                  className='inline-block px-16 py-2 border border-my_black rounded-2xl '
                  href='#/'>
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NavBar;
