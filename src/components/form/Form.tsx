import { useState } from 'react';
import "./Form.scss"
interface IFormProps<T> {
    data?: T;
    setShowModal: (value: boolean) => void;
    onSubmit: (data: T) => void;
    ignoredFields?: string[];
    includeIgnoredFields?: boolean;
}

export const Form = <T extends Record<string, any>>({
    data = {} as T,
    setShowModal,
    onSubmit,
    ignoredFields = [],
    includeIgnoredFields = false,
}: IFormProps<T>) => {
    const [formData, setFormData] = useState<T>(data);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const filteredData = includeIgnoredFields
            ? formData
            : Object.fromEntries(Object.entries(formData).filter(([key]) => !ignoredFields.includes(key)));
        onSubmit(filteredData as T);
        setShowModal(false);
    }

    const fields = Object.keys(data);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const formFields = fields
        .filter(
            (fieldName) =>
                includeIgnoredFields || !ignoredFields.includes(fieldName)
        )
        .map((field) => (
            <div key={field} className='input-box'>
                {/* <label htmlFor={field}>{field}</label> */}
                <input type="text" id={field} name={field} value={formData[field as keyof T] ?? ''} placeholder={field} onChange={handleChange} />
            </div>
        ));
    return (
        <>
            <div className='form-wrapper' >
                <form onSubmit={handleSubmit}>
                    {formFields}
                    <button >Add</button>
                </form>
            </div>
        </>
    );
};