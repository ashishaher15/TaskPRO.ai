export const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        console.log(req.body);
        res.status(200).json({ message: "Task received", data: req.body });
    } catch (error) {
        res.status(500).json({ error: "Error creating task" });
    }
};

export const getAllTask = async (req, res) => {}




export const showTask = async (req, res) => {}




export const updateTask = async (req, res) => {}




export const deleteTask = async (req, res) => {}