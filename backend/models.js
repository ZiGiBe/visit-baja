require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASS, { dialect: 'mysql', host: process.env.DBHOST})

//Galleries
const SightsGallery = sequelize.define('SightsGallery', {
    image: {
        type: DataTypes.TEXT,
    },
    preview: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {timestamps: false});
//Models
const Services = sequelize.define('Services', {
    name: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    href:{
        type: DataTypes.STRING
    },
    isRestaurant:{
        type: DataTypes.BOOLEAN
    },
    image: {
        type: DataTypes.TEXT
    }
})
const Infos = sequelize.define("Infos",{
    title: {
        type: DataTypes.STRING
    },
    href: {
        type: DataTypes.TEXT
    },
    image: {
        type: DataTypes.TEXT
    }
})
const Sights = sequelize.define('Sights', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    shortdesc: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    fulldesc: {
        type: DataTypes.JSON,
        allowNull: false
    },
    href: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
});
const Programs = sequelize.define('Programs', {
    title: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    start: {
        type: DataTypes.DATE,

    },
    end: {
        type: DataTypes.DATE,
        allowNull: true
    },
    desc: {
        type: DataTypes.TEXT
    },
    href: {
        type: DataTypes.TEXT
    },
    image: {
        type: DataTypes.TEXT
    }
})
const Users = sequelize.define('Users', {
    username: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    }
})
const IndexSlideshow = sequelize.define('IndexSlideshow', {
    filename: {
        type: DataTypes.STRING
    }
})
const Translations = sequelize.define('Translations', {
    lang: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING,
    },
    fulldesc: {
        type: DataTypes.JSON,
        allowNull: true
    },
    model: {
        type: DataTypes.STRING
    },
    itemId: {
        type: DataTypes.INTEGER
    }
})
//Foreign Keys
SightsGallery.belongsTo(Sights, {foreignKey: "itemID"});

module.exports = {sequelize, Users, Sights, Services, Programs, SightsGallery, IndexSlideshow, Infos, Translations};