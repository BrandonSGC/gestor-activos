import React, { useState, useEffect } from 'react';
import '../assets/styles/InsertItems.css';
import * as XLSX from 'xlsx';


const ExcelUploadModal = ({ closeModal, handleFileUpload }) => {
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        handleFileUpload(file);
        closeModal();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>
                    &times;
                </span>
                <h2>Tipo de archivo permitido: xlsx (Excel)</h2>
                <input className="input-inserts" type="file" onChange={handleFileChange} accept=".xlsx, .xls" />
            </div>
        </div>
    );
};
const InsertItemsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [marcaOptions, setMarcaOptions] = useState([]);
    const [departamentoOptions, setDepartamentoOptions] = useState([]);
    const [areaOptions, setAreaOptions] = useState([]);
    const [condicionOptions, setCondicionOptions] = useState([]);
    const [estadoOptions, setEstadoOptions] = useState([]);
    const [modeloOptions, setModeloOptions] = useState([]);

    const fetchData = async (url, setStateFunction) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
            }
            const data = await response.json();
            setStateFunction(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchData('http://127.0.0.1:8000/marcas', setMarcaOptions);
        fetchData('http://127.0.0.1:8000/modelos', setModeloOptions);
        fetchData('http://127.0.0.1:8000/departamentos', setDepartamentoOptions);
        fetchData('http://127.0.0.1:8000/areas', setAreaOptions);
        fetchData('http://127.0.0.1:8000/condicion', setCondicionOptions);
        fetchData('http://127.0.0.1:8000/estadoactivo', setEstadoOptions);
    }, []);

    console.log(marcaOptions)
    const openModal = () => {
        setIsModalOpen(true);

    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleFileUpload = async (file) => {
        const reader = new FileReader();

        return new Promise((resolve) => {
            reader.onload = async (event) => {
                const fileContent = event.target.result;
                console.log('File uploaded:', file);
                const workbook = XLSX.read(fileContent, { type: 'binary' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];

                const data = XLSX.utils.sheet_to_json(sheet, { header: 'A' });

                const formattedData = [];

                for (let i = 1; i < data.length; i++) {
                    const rowData = data[i];

                    const formattedRow = {
                        Nombre: rowData.A || '',
                        NumeroSerie: `${rowData.B}` || '',
                        EstadoID: rowData.C || '',
                        CondicionID: rowData.D || '',
                        MarcaID: rowData.E || '',
                        DepartamentoID: rowData.F || '',
                        AreaID: rowData.G || '',
                        Exacta: rowData.H || '',
                        ModeloID: rowData.I || '',
                    };

                    formattedData.push(formattedRow);
                }

                console.log('Formatted content:', formattedData);

                const successfulUploads = await sendToApi(formattedData);
                resolve(successfulUploads);
            };

            reader.readAsBinaryString(file);
        });
    };

    const sendToApi = async (formattedData) => {
        let successfulUploads = 0;

        for (const rowData of formattedData) {
            try {
                console.log('Sending data to API:', rowData);  // Log the data before making the API request

                const response = await fetch('http://127.0.0.1:8000/activos/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(rowData),
                });

                console.log('API Response:', response);  // Log the API response

                if (response.ok) {
                    successfulUploads++;
                }
            } catch (error) {
                handleApiError(error);
            }
        }

        return handleSuccessfulUpload(successfulUploads);
    };

    const handleSuccessfulUpload = (uploadedItemsCount) => {
        alert(`${uploadedItemsCount} activos insertados exitosamente.`);
    };

    const [formData, setFormData] = useState({
        nombre: '',
        nserie: '',
        estado: '',
        condicion: '',
        marca: '',
        modelo: '',
        area: '',
        departamento: '',
        exacta: '',

    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    const handleApiError = (error) => {
        console.error('Error al insertar el activo:', error);
        alert('Hubo un error al insertar el activo. Por favor, inténtalo nuevamente.');
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.nserie.trim()) {
            alert('Por favor, digite un número de serie.');
            return;
        }

        if (!formData.estado) {
            alert('Por favor, ingrese un Estado del Activo.');
            return;
        }

        if (!formData.condicion) {
            alert('Por favor, ingrese una Condición del Activo.');
            return;
        }

        if (!formData.modelo) {
            alert('Por favor, ingrese un modelo.');
            return;
        }

        if (!formData.area) {
            alert('Por favor, ingrese un Área.');
            return;
        }

        if (!formData.departamento) {
            alert('Por favor, ingrese un Departamento.');
            return;
        }

        if (!formData.exacta.trim()) {
            alert('Por favor, ingrese el lugar exacto donde se encuentra el activo en el campo Exacta.');
            return;
        }

        const convertToNumber = (value) => {
            const numberValue = parseInt(value, 10);
            return isNaN(numberValue) ? null : numberValue;
        };

        const formDataToSend = {
            Nombre: formData.nombre,
            NumeroSerie: formData.nserie,
            EstadoID: convertToNumber(formData.estado),
            CondicionID: convertToNumber(formData.condicion),
            MarcaID: convertToNumber(formData.marca),
            ModeloID: convertToNumber(formData.modelo),
            AreaID: convertToNumber(formData.area),
            DepartamentoID: convertToNumber(formData.departamento),
            Exacta: formData.exacta,
        };

        console.log(formDataToSend)
        try {
            const response = await fetch('http://127.0.0.1:8000/activos/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataToSend),
            });
            const responseData = await response.json();
            console.log('Nuevo activo creado:', responseData)

            if (!response.ok) {
                throw new Error(`Error al insertar el activo: ${response.statusText}`);
            }

            setFormData((prevFormData) => ({
                ...prevFormData,
                nombre: '',
                nserie: '',
                estado: '',
                condicion: '',
                modelo: '',
                marca: '',
                departamento: '',
                area: '',
                exacta: '',
            }));

            alert('Activo insertado exitosamente.');
        } catch (error) {
            handleApiError(error);
        }
    };
    return (
        <div className="inserts-container">
            <div className='title-inserts'>
                <p>Insertar Activos</p>
                <hr />
            </div>
            <div className='form-inserts-container'>
                <form className='form-inserts' onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="nombre" className="label-inserts">Nombre</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleInputChange}
                                required
                                className="input-inserts"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nserie" className="label-inserts">Número de serie</label>
                            <input
                                type="text"
                                id="nserie"
                                name="nserie"
                                value={formData.nserie}
                                onChange={handleInputChange}
                                required
                                className="input-inserts"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="estado" className="label-inserts">Estado del activo</label>
                            <select
                                id="estado"
                                name="estado"
                                value={formData.estado}
                                onChange={handleInputChange}
                                required
                                className="input-inserts select-input"
                            >
                                <option value="">Seleccione un Estado de activo</option>
                                {estadoOptions.map((estado, index) => (
                                    <option key={estado.EstadoID} value={estado.EstadoID}>{estado.NombreEstado}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="condicion" className="label-inserts">Condición del activo</label>
                            <select
                                id="condicion"
                                name="condicion"
                                value={formData.condicion}
                                onChange={handleInputChange}
                                required
                                className="input-inserts select-input"
                            >
                                <option value="">Seleccione una Condición de activo</option>
                                {condicionOptions.map((condicion, index) => (
                                    <option key={condicion.CondicionID} value={condicion.CondicionID}>{condicion.NombreCondicion}</option>
                                ))}
                            </select>
                        </div>



                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="marca" className="label-inserts">Marca</label>
                            <select
                                id="marca"
                                name="marca"
                                value={formData.marca}
                                onChange={handleInputChange}
                                required
                                className="input-inserts select-input"
                            >
                                <option value="">Seleccione una Marca</option>
                                {marcaOptions.map((marca, index) => (
                                    <option key={marca.MarcaID} value={marca.MarcaID}>{marca.NombreMarca}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="departamento" className="label-inserts">Departamento</label>
                            <select
                                id="departamento"
                                name="departamento"
                                value={formData.departamento}
                                onChange={handleInputChange}
                                required
                                className="input-inserts select-input"
                            >
                                <option value="">Seleccione un Departamento</option>
                                {departamentoOptions.map((departamento, index) => (
                                    <option key={departamento.DepartamentoID} value={departamento.DepartamentoID}>{departamento.NombreDepartamento}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="area" className="label-inserts">Área</label>
                            <select
                                id="area"
                                name="area"
                                value={formData.area}
                                onChange={handleInputChange}
                                required
                                className="input-inserts select-input"
                            >
                                <option value="">Seleccione una Área</option>
                                {areaOptions.map((area, index) => (
                                    <option key={area.AreaID} value={area.AreaID}>{area.NombreArea}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exacta" className="label-inserts">Exacta</label>
                            <input
                                id="exacta"
                                name="exacta"
                                value={formData.exacta}
                                onChange={handleInputChange}
                                required
                                className="input-inserts"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="modelo" className="label-inserts">Modelo</label>
                        <select
                            id="modelo"
                            name="modelo"
                            value={formData.modelo}
                            onChange={handleInputChange}
                            required
                            className="input-inserts select-input"
                        >
                            <option value="">Seleccione un modelo</option>
                            {modeloOptions.map((modelo, index) => (
                                <option key={modelo.ModeloID} value={modelo.ModeloID}>{modelo.NombreModelo}</option>
                            ))}
                        </select>
                    </div>


                    <div className='button-inserts-container'>
                        <button type="submit" className="btn-inserts">Agregar activo</button>
                        <button type="button" className="btn-inserts" onClick={openModal}>
                            Importar Activos
                        </button>
                    </div>
                    {isModalOpen && (
                        <ExcelUploadModal
                            closeModal={closeModal}
                            handleFileUpload={handleFileUpload}
                            handleSuccessfulUpload={handleSuccessfulUpload}
                        />
                    )}
                </form>
            </div>
        </div>
    );
};

export default InsertItemsPage;