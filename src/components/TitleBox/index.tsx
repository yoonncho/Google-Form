import { Wrapper } from './style';

export interface FormProps {
  formTitle: string;
  formDetail: string;
}

interface Props {
  info: FormProps;
  setInfo: React.Dispatch<React.SetStateAction<FormProps>>;
}

const TitleBox = ({ info, setInfo }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { value, name } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  return (
    <Wrapper>
      <div className="inputs">
        <input
          type="text"
          className="title-input"
          placeholder="제목 없는 설문지"
          name="formTitle"
          value={info.formTitle}
          onChange={handleChange}
        />
        <input
          type="text"
          className="detail-input"
          placeholder="설문지 설명"
          name="formDetail"
          value={info.formDetail}
          onChange={handleChange}
        />
      </div>
    </Wrapper>
  );
};

export default TitleBox;
