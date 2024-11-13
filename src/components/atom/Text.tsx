
import { subTitleStyle } from '@/style/header';
import { TextPropsType } from '@/type/props/atom';

// text
const 
Text = ({ text, cursor }: TextPropsType) => {
  return <h1 className={`${subTitleStyle} ${cursor}`}>{text}</h1>;
};

export default Text;
