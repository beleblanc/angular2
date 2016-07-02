(function(global) {
  // map tells the System loadr where to look for things
  var map {
    'app': 'app',
    '@angular': 'Node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs': 'node_modules/rxjs'
  };

  var packages = {
    'app': {main: 'main.js', defaultExtension: 'js'},
    'rxjs': {defaultExtension: 'js'},
    'angular2-in-memory-web-api': {main: 'index.js', defaultExtension: 'js'}
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade'
  ];

  //Individual angular packages
  function packIndex(pkgName) {
    packages['@angular/' +pkgName] = {main: 'index.js', defaultExtension: 'js'}
  }
  //Bundled packages
  function packUmd(pkgName) {
    packages['@angular/' +pkgName] = {main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js'}
  }

  //Most packages use umd, some use individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  ngPackageNames.forEach(setPackageConfig);

  var config = {
    map: map,
    packages: packages
  };

  System.config(config);
})(this);
