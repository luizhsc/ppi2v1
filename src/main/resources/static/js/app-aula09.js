var modulo1 = angular.module("modulo1", []);

var controlador = modulo1.controller("controlador1", function($scope) {
    $scope.nome = "Teste";
    $scope.contador = 0;

    $scope.soma = function(a, b){	return parseFloat(a) + parseFloat(b);	}

	$scope.subtrai = function(a, b){return a - b;}

	$scope.multiplica = function(a, b){	return a * b; }

	$scope.divide = function(a, b){	return a / b;	}

	$scope.calcula = function(f, x, y){return f(x, y);		}


	$scope.somar = function(){
		$scope.resultado = $scope.calcula($scope.soma, $scope.valor1, $scope.valor2)
	}

	$scope.subtrair = function(){
		$scope.resultado = $scope.calcula($scope.subtrai, $scope.valor1, $scope.valor2)
	}

    $scope.conta = function(){
        $scope.contador = $scope.contador + 1;
        
    }
});
