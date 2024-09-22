
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface SidebarProps {
  className?: string;
//   theme?: AppLinkTheme;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { 
        className, 
        children,
        ...otherProps
    } = props;

    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
      setCollapsed(prev => !prev)
    }

    return (
      <div 
        className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])} 
        {...otherProps}
      >
        <button onClick={onToggle}>toggle</button>
        <div className={cls.switchers}>
          <ThemeSwitcher/>
          <LangSwitcher className={cls.lang}/>
        </div>
      </div>
    );
};