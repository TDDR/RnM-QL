import { MikroORM} from '@mikro-orm/core'
import { __prod__ } from './constants';
import { Post } from './entities/Post';
import mikroConfig from './mikro-orm.config';

const main = async () =>{
    const orm = await MikroORM.init(mikroConfig);
    await orm.getMigrator().up();
    const emFork = orm.em.fork();

    // const post = emFork.create(Post, {
    //     title: "My second post",
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    // }); 
    // await emFork.persistAndFlush(post);

    // const posts = await emFork.find(Post, {})
    // console.log(posts);
    console.log(Post);
    console.log(emFork);
};

main().catch((err) => {
    console.error(err);
});