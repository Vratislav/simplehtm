// Packages up the entire thing in namespaces.
window.simplehtm = {

    encoders: {
        ScalarEncoder: require('./encoders/scalar'),
        BoundedScalarEncoder: require('./encoders/boundedScalar'),
        CyclicEncoder: require('./encoders/cyclicScalar'),
        CategoryEncoder: require('./encoders/category'),
        WeekendEncoder: require('./encoders/weekend'),
    }

}
