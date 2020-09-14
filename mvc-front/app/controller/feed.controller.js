(function(app) {

    app.controller('FeedController', function( $scope, $sessionStorage ) {
        //Pega o usuário logado
        $scope.logado = $sessionStorage.logado;
    });

})( appDS2 );