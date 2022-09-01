class Link{
    constructor(bodyA,bodyB){
        //criaçao da variavel para ecolher o ultimo retangulo
        var lastLink = bodyA.body.bodies.length -2;
        this.link = Constraint.create({
            //criar conexao no ultimo retangulo encontrado no lastLink
            bodyA:bodyA.body.bodies[lastLink],
            pointA:{x:0 ,y:0},
            //corpo da fruta
            bodyB:bodyB,
            pointB:{x:0 ,y:0},
            //comprimento da restriçao
            length:-10,
            //rigidez para a restriçao permanecer estavel
            stiffness:0.01

        });
        World.add(engine.world,this.link);

    }
}
