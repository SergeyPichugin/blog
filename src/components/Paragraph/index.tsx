import React from "react";
import styles from "./Paragraph.module.scss";
import cn from 'classnames'
import type { ParagraphProps } from "./Paragraph.props";
export const Paragraph = ({size, children, className, ...props}: ParagraphProps): JSX.Element => {
    return (
    <p className={
        cn(
            styles.p,
            className,
            {
                [styles.s]: size === 's' || !size,
                [styles.m]: size === 'm',
                [styles.l]: size === 'l',
                [styles.xl]: size === 'xl'
            }
        )
    } 
    {...props}>
        {children}
    </p>
    );
};