import React, { useState } from 'react';
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
                <h2>Upload Excel File</h2>
                <input type="file" onChange={handleFileChange} accept=".xlsx, .xls" />
            </div>
        </div>
    );
};
const InsertItemsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleFileUpload = (file) => {
        const reader = new FileReader();

        reader.onload = (event) => {
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
                    nombre: rowData.A || '',
                    nserie: rowData.B || '',
                    estado: rowData.C || '',
                    condicion: rowData.D || '',
                    modelo: rowData.E || '',
                    departamento: rowData.F || '',
                    area: rowData.G || '',
                    exacta: rowData.H || '',
                };

                formattedData.push(formattedRow);
            }

            console.log('Formatted content:', formattedData);
        };

        reader.readAsBinaryString(file);
    };


    const [formData, setFormData] = useState({
        nombre: '',
        nserie: '',
        estado: '',
        condicion: '',
        modelo: '',
        departamento: '',
        area: '',
        exacta: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
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
                            <input
                                type="text"
                                id="estado"
                                name="estado"
                                value={formData.estado}
                                onChange={handleInputChange}
                                required
                                className="input-inserts"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="condicion" className="label-inserts">Condición del activo</label>
                            <input
                                type="text"
                                id="condicion"
                                name="condicion"
                                value={formData.condicion}
                                onChange={handleInputChange}
                                required
                                className="input-inserts"
                            />
                        </div>


                    </div>

                    <div className="form-row">
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
                                {/* Opciones del modelo */}
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
                                {/* Opciones del departamento */}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="area" className="label-inserts">Área:</label>
                            <select
                                id="area"
                                name="area"
                                value={formData.area}
                                onChange={handleInputChange}
                                required
                                className="input-inserts select-input"
                            >
                                {/* Opciones del área */}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exacta" className="label-inserts">Exacta</label>
                            <input
                                type="password"
                                id="exacta"
                                name="exacta"
                                value={formData.exacta}
                                onChange={handleInputChange}
                                required
                                className="input-inserts"
                            />
                        </div>
                    </div>


                    <div className='button-inserts-container'>
                        <button type="submit" className="btn-inserts">Agregar activo</button>
                        <button type="button" className="btn-inserts" onClick={openModal}>
                            Importar Activos
                        </button>
                    </div>
                    {isModalOpen && (
                        <ExcelUploadModal closeModal={closeModal} handleFileUpload={handleFileUpload} />
                    )}
                </form>
            </div>
        </div>
    );
};

export default InsertItemsPage;