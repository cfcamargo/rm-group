export default function useSubmitToSheet() {
    const submitData = async (formData) => {
        try {
            const response = await fetch('/api/sheets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response
            return data;
        } catch (error) {
            console.error('Error submitting form:', error);
            throw error;
        }
    };

    return { submitData };
}