# Stack de Stream do twitter utilizando Kafka + Spark + Spark Stream

Install dependencies:

npm install

Run Kafka Zookeeper:

bin/zookeeper-server-start.sh config/zookeeper.properties

Run Kafka Server:

bin/kafka-server-start.sh config/server.properties

Run node server:

node server.js

Run Spark Server:

bin/spark-submit --packages org.apache.spark:spark-streaming-kafka-0-8-assembly_2.11:2.0.0 ~/workspace/kafka/run.py localhost:9092 test

Test Consumer:

bin/kafka-console-consumer.sh --zookeeper localhost:2181 --topic test --from-beginning

Test Producer:

bin/kafka-console-producer.sh --broker-list localhost:9092 --topic test