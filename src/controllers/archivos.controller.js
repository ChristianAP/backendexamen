import { pool } from '../database'

// CREAR ARCHIVOS
export const createArchivo = async(req, res) => {
    try {
        const { nombre, tipo, url, path, idusuario } = req.body;
        const response = await pool.query('insert into archivos(nombre, tipo, url, path , idusuario) values($1, $2, $3, $4, $5)', 
                        [nombre, tipo, url,path, idusuario]);
        return res.status(200).json(
            response );
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

// LISTAR ARCHIVOS 
export const readAllArchivo = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select a.idarchivos, a.nombre, a.tipo, a.url, u.idusuario, a.path from archivos a, usuario u where a.idusuario = u.idusuario and u.idusuario=$1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}


// LISTAR ARCHIVOS POR ID
export const readArchivo = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select a.idarchivos, a.nombre, a.tipo, a.url, u.idusuario, a.path from archivos a, usuario u where a.idusuario = u.idusuario and a.idarchivos=$1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//ELIMINAR ARCHIVO
export const deleteArchivo= async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from archivos where idarchivos=$1', [id]);

        return res.status(200).json(
            `Idioma ${ id } eliminado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

            //ELIMINAR LEGAJO
            export const deleteLegajo = async(req, res) => {
                try {
                    const id = parseInt(req.params.id);
                    const response = await pool.query('delete from legajos where idlegajos=$1', [id]);

                    return res.status(200).json(
                        `Legajo ${ id } eliminado correctamente...!`);
                } catch (e) {
                    console.log(e)
                    return res.status(500).json('Internal Server error...!');
                }
            }
// MODIFICAR ARCHIVO 
export const updateArchivo = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nombre, tipo, url } = req.body;
        await pool.query('update archivos set nombre= $1, tipo = $2, url=$3  where idarchivos=$4', 
        [nombre, tipo, url, id]);

        return res.status(200).json(
            `Archivo ${ id } se ha actualizado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}