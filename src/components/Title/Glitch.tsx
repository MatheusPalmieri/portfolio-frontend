import './Glitch.css';

interface GlitchProps {
  text: string;
}

export const Glitch = ({ text }: GlitchProps) => (
  <div className='glitch' data-text={text}>
    {text}
  </div>
);
